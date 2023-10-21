pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'sudo -u ubuntu npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'sudo -u ubuntu npm run build'
            }
        }
        stage('Start PM2') {
            steps {
              sh 'sudo -u ubuntu npm run pm2:start'                
            }
        }
    }
}