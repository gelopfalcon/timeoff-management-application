pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Step 1: Installing dependencies"
                sh 'npm ci'
            }

        }

        stage('Build image and Test') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-registry', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh ' echo "$PASSWORD" | docker login --username=$USERNAME --password-stdin'
                    echo "Step 1: Build Docker image"
                    sh 'docker build -t glgelopfalcon/timeoff:${BUILD_NUMBER} .'
                    sh 'docker run -d -p 3000:3000 --name timeoff glgelopfalcon/timeoff'
                    sh 'npm test'
            }
         }   
        }
    }
}