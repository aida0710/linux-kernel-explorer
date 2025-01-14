---
sidebar_position: 28
---
# test-record-no-buffering

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-no-buffering`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event --no-buffering kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_type=263
watermark=0
wakeup_events=1

```
