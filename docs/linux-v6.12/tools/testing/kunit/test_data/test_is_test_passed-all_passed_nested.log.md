---
sidebar_position: 5
---
# test_is_test_passed-all_passed_nested.log

### ファイル情報

- パス: `linux-v6.12/tools/testing/kunit/test_data/test_is_test_passed-all_passed_nested.log`

### コンテンツ

```log
TAP version 14
1..2
	# Subtest: sysctl_test
	1..4
	# sysctl_test_dointvec_null_tbl_data: sysctl_test_dointvec_null_tbl_data passed
	ok 1 - sysctl_test_dointvec_null_tbl_data
		# Subtest: example
		1..2
	init_suite
		# example_simple_test: initializing
		# example_simple_test: example_simple_test passed
		ok 1 - example_simple_test
		# example_mock_test: initializing
		# example_mock_test: example_mock_test passed
		ok 2 - example_mock_test
	kunit example: all tests passed
	ok 2 - example
	# sysctl_test_dointvec_table_len_is_zero: sysctl_test_dointvec_table_len_is_zero passed
	ok 3 - sysctl_test_dointvec_table_len_is_zero
	# sysctl_test_dointvec_table_read_but_position_set: sysctl_test_dointvec_table_read_but_position_set passed
	ok 4 - sysctl_test_dointvec_table_read_but_position_set
kunit sysctl_test: all tests passed
ok 1 - sysctl_test
	# Subtest: example
	1..2
init_suite
	# example_simple_test: initializing
	# example_simple_test: example_simple_test passed
	ok 1 - example_simple_test
	# example_mock_test: initializing
	# example_mock_test: example_mock_test passed
	ok 2 - example_mock_test
kunit example: all tests passed
ok 2 - example

```
