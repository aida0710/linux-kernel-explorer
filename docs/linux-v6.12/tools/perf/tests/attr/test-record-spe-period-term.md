---
sidebar_position: 35
---
# test-record-spe-period-term

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-spe-period-term`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -e arm_spe_0/period=3/ -- kill >/dev/null 2>&1
ret     = 1
arch    = aarch64

[event-10:base-record-spe]
sample_period=3
freq=0

# dummy event
[event-1:base-record-spe]

```
