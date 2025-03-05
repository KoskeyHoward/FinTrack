#!/bin/bash

# Script to run JMeter performance test for FinTrack

# Set the base directory for performance testing
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../"
PLANS_DIR="${BASE_DIR}/plans"
RESULTS_DIR="${BASE_DIR}/results"

# Check if JMeter is installed
if ! command -v jmeter &> /dev/null; then
    echo "JMeter is not installed. Please install JMeter first."
    exit 1
fi

# Check if the FinTrack server is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "FinTrack server is not running. Starting the server..."
    cd "${BASE_DIR}/../" && npm start &
    # Wait for the server to start
    sleep 5
    echo "Server started."
fi

# Create results directory if it doesn't exist
mkdir -p "${RESULTS_DIR}"

# Get current timestamp for the results
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "Starting JMeter performance test..."

# Run JMeter in non-GUI mode
jmeter -n -t "${PLANS_DIR}/performance_test_plan.jmx" \
       -l "${RESULTS_DIR}/results_${TIMESTAMP}.jtl" \
       -j "${RESULTS_DIR}/jmeter_${TIMESTAMP}.log" \
       -e -o "${RESULTS_DIR}/dashboard_${TIMESTAMP}"

echo "Performance test completed."
echo "Results saved to ${RESULTS_DIR}/results_${TIMESTAMP}.jtl"
echo "Log saved to ${RESULTS_DIR}/jmeter_${TIMESTAMP}.log"
echo "Dashboard report generated at ${RESULTS_DIR}/dashboard_${TIMESTAMP}"

# Open the dashboard report in the default browser
open "${RESULTS_DIR}/dashboard_${TIMESTAMP}/index.html"

# Update the performance_test_results.md with a note about the latest test
echo "
## Latest Test Run

Date: $(date '+%Y-%m-%d %H:%M:%S')
Results: ${RESULTS_DIR}/dashboard_${TIMESTAMP}/index.html
" >> "${BASE_DIR}/performance_test_results.md"
