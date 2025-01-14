---
sidebar_position: 12
---
# trace_pipe.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/00basic/trace_pipe.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: trace_pipe and trace_marker
# requires: trace_marker
# flags: instance

echo "test input 1" > trace_marker

: "trace interface never consume the ring buffer"
grep -q "test input 1" trace
grep -q "test input 1" trace

: "trace interface never consume the ring buffer"
head -n 1 trace_pipe | grep -q "test input 1"
! grep -q "test input 1" trace

```
