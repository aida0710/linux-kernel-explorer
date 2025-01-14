---
sidebar_position: 2
---
# basic2.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/00basic/basic2.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: Basic test for tracers
# flags: instance
test -f available_tracers
for t in `cat available_tracers`; do
  echo $t > current_tracer
done
echo nop > current_tracer

```
