pipeline {
    agent ubuntu

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Start PM2') {
            steps {
                sh 'npm run pm2:start'
            }
        }
    }
}