---
sidebar_position: 10
---
# test-record-branch-filter-any_ret

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-branch-filter-any_ret`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -j any_ret kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_type=2311
branch_sample_type=32

```
