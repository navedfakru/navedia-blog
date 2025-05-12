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
            return  this.account.createOAuth2Session(
                OAuthProvider.Google,
                'http://localhost:5173/all-posts',
                'http://localhost:5173',
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
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService
