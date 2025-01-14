---
sidebar_position: 8
---
# add_remove_uprobe.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/dynevent/add_remove_uprobe.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: Generic dynamic event - add/remove/test uprobe events
# requires: uprobe_events

echo 0 > events/enable
echo > dynamic_events

echo 'cat /proc/$$/maps' | /bin/sh | \
	grep "r-xp .*/bin/.*sh$" | \
	awk '{printf "p:myevent %s:0x%s\n", $6,$3 }' >> uprobe_events

grep -q myevent uprobe_events
test -d events/uprobes/myevent

echo 1 > events/uprobes/myevent/enable
echo 'ls' | /bin/sh > /dev/null
echo 0 > events/uprobes/myevent/enable
grep -q myevent trace

echo "-:myevent" >> uprobe_events
! grep -q myevent uprobe_events

echo > uprobe_events

clear_trace

```
