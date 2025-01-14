---
sidebar_position: 20
---
# test-record-graph-default

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-graph-default`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -g kill >/dev/null 2>&1
ret     = 1
# arm64 enables registers in the default mode (fp)
arch    = !aarch64

[event:base-record]
sample_type=295

```
