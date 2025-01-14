---
sidebar_position: 1
---
# wakeup.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/tracer/wakeup.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: Test wakeup tracer
# requires: wakeup:tracer chrt:program

echo wakeup > current_tracer
echo 1 > tracing_on
echo 0 > tracing_max_latency

: "Wakeup higher priority task"
chrt -f 5 sleep 1

echo 0 > tracing_on
grep '+ \[[[:digit:]]*\]' trace
grep '==> \[[[:digit:]]*\]' trace


```
