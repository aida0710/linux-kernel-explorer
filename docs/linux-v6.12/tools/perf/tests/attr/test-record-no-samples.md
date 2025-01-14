---
sidebar_position: 30
---
# test-record-no-samples

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-no-samples`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -n kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_period=0

```
