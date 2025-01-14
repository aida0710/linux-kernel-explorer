---
sidebar_position: 33
---
# test-record-raw

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-raw`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -R kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_type=1415

```
