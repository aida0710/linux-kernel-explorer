---
sidebar_position: 23
---
# test-record-graph-fp

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-graph-fp`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event --call-graph fp kill >/dev/null 2>&1
ret     = 1
# arm64 enables registers in fp mode
arch    = !aarch64

[event:base-record]
sample_type=295

```
