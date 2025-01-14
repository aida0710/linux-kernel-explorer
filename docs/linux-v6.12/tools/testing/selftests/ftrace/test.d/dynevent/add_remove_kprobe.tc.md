---
sidebar_position: 4
---
# add_remove_kprobe.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/dynevent/add_remove_kprobe.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: Generic dynamic event - add/remove kprobe events
# requires: dynamic_events "place: [<module>:]<symbol>":README "place (kretprobe): [<module>:]<symbol>":README

echo 0 > events/enable
echo > dynamic_events

PLACE=$FUNCTION_FORK

echo "p:myevent1 $PLACE" >> dynamic_events
echo "r:myevent2 $PLACE" >> dynamic_events

grep -q myevent1 dynamic_events
grep -q myevent2 dynamic_events
test -d events/kprobes/myevent1
test -d events/kprobes/myevent2

echo "-:myevent2" >> dynamic_events

grep -q myevent1 dynamic_events
! grep -q myevent2 dynamic_events

echo > dynamic_events

if grep -q "p\[:\[<group>/]\[<event>]]" README; then
	echo "p:mygroup/ $PLACE" >> dynamic_events
	test -d events/mygroup
	echo "-:mygroup/" >> dynamic_events
	! test -d events/mygroup
fi

clear_trace

```
