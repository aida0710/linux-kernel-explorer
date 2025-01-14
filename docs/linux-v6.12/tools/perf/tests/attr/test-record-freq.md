---
sidebar_position: 19
---
# test-record-freq

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-freq`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -F 100 kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_period=100

```
