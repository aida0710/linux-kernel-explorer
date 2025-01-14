---
sidebar_position: 14
---
# test-record-branch-filter-u

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-branch-filter-u`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -j u kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_type=2311
branch_sample_type=8

```
