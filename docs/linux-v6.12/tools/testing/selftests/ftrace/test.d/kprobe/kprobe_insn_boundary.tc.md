---
sidebar_position: 14
---
# kprobe_insn_boundary.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/kprobe/kprobe_insn_boundary.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0-or-later
# Copyright (C) 2023 Akanksha J N, IBM corporation
# description: Register multiple kprobe events in a function
# requires: kprobe_events

for i in `seq 0 255`; do
  echo p $FUNCTION_FORK+${i} >> kprobe_events || continue
done

cat kprobe_events >> $testlog

echo 1 > events/kprobes/enable
( echo "forked" )
echo 0 > events/kprobes/enable
echo > kprobe_events
echo "Waiting for unoptimizing & freeing"
sleep 5
echo "Done"

```
