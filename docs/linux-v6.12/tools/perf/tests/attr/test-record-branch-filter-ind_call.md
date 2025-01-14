---
sidebar_position: 12
---
# test-record-branch-filter-ind_call

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-branch-filter-ind_call`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -j ind_call kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_type=2311
branch_sample_type=64

```
