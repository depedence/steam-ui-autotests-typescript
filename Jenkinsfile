pipeline {
    agent none

    stages {
        stage('Checkout') {
            agent any
            steps {
                checkout scm
                stash includes: '**', name: 'source'
            }
        }

        stage('Install & Test') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.48.0-jammy'
                    args '--ipc=host'
                }
            }
            steps {
                unstash 'source'
                retry(3) {
                    sh 'npm ci'
                }
                sh 'npx playwright test'
                stash includes: 'allure-results/**', name: 'allure-results'
            }
        }

        stage('Report') {
            agent any
            steps {
                unstash 'allure-results'
            }
        }
    }

    post {
        always {
            node('') {
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
    }
}
