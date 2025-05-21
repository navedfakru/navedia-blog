import conf from '../conf/conf.js';
import { Client, Account, OAuthProvider } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

      async googleAuth() {
        try {
            const isDev = process.env.NODE_ENV;
            console.log("auth.js", isDev)
            const redirectURL = isDev === 'development' ? 'http://localhost:5173' : 'https://blog.navedx.com';
            return  this.account.createOAuth2Session(
                OAuthProvider.Google,
                `${redirectURL}/all-posts`,
                `${redirectURL}`,
            );

        } catch (error) {
            console.log("GoogleAuth :: Config :: Error ::", error)
        }
    }

    async getCurrentSession() {
        try {
            return await this.account.getSession('current');
        } catch (error) {
            console.log("Appwrite serive :: getCurrentSession :: error", error);
        }

        return null;
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSession('current');
            console.log('Appwrite serivce :: logout ::User logged out successfully');
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService
