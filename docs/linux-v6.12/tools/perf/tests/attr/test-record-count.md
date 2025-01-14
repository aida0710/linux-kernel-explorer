---
sidebar_position: 16
---
# test-record-count

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-count`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -c 123 kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_period=123
sample_type=7
freq=0

```
