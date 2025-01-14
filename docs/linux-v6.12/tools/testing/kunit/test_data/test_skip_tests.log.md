---
sidebar_position: 23
---
# test_skip_tests.log

### ファイル情報

- パス: `linux-v6.12/tools/testing/kunit/test_data/test_skip_tests.log`

### コンテンツ

```log
TAP version 14
1..2
    # Subtest: string-stream-test
    1..3
    ok 1 - string_stream_test_empty_on_creation
    ok 2 - string_stream_test_not_empty_after_add
    ok 3 - string_stream_test_get_string
ok 1 - string-stream-test
    # Subtest: example
    1..2
    # example_simple_test: initializing
    ok 1 - example_simple_test
    # example_skip_test: initializing
    ok 2 - example_skip_test # SKIP this test should be skipped
ok 2 - example

```
