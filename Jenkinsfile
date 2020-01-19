pipeline {
    agent any
    stages {
        stage('Build and Test') {
            steps {
                echo "Step 1: Installing dependencies"
                sh 'npm ci'
                echo "Step 2: Running Test"
                sh 'npm start'
                sh 'npm test'
                sh 'kill $(lsof -t -i:3000)'
            }

        }
    }
}