# FinTrack Performance Testing

This directory contains all files related to performance testing of the FinTrack application using Apache JMeter.

## Directory Structure

- `plans/`: Contains JMeter test plan files (`.jmx`)
- `results/`: Contains test results and generated dashboards
- `scripts/`: Contains scripts for running performance tests

## Test Plans

- `plans/performance_test_plan.jmx`: JMeter test plan for the GET `/categories/{id}/transactions` endpoint

### Load Pattern

The test plan uses a standard Thread Group configured to implement both ramp-up and natural ramp-down periods:

1. **Ramp-Up Period**: 60 seconds to gradually increase from 0 to 40 users
2. **Steady State**: ~90 seconds at full load (40 concurrent users)
3. **Think Time**: 1-3 seconds between requests (random uniform distribution)
4. **Natural Ramp-Down**: The last ~30 seconds as threads complete their final iterations

For detailed information about the ramp-up and ramp-down configuration, see `ramp_up_down_explanation.md`.

## Running Tests

To run the performance tests:

```bash
cd scripts
./run_performance_test.sh
```

This will execute the JMeter test plan and generate results in the `results/` directory.

## Test Results

The latest test results are documented in `performance_test_results.md` in the root of this directory.

Detailed HTML dashboards for each test run are available in the `results/` directory.

## Documentation

- `performance_test_results.md`: Detailed results and analysis of the performance tests
- `ramp_up_down_explanation.md`: Explanation of ramp-up and ramp-down periods in the test plan
- `connection_issues_solution.md`: Documentation of connection issues encountered and solutions implemented

## Performance Thresholds

The following performance thresholds are set for the tests:

1. **Average Response Time**: Should be less than 1 second
2. **Error Rate**: Should be less than 1%
3. **Throughput**: Should be at least 50 requests per second

