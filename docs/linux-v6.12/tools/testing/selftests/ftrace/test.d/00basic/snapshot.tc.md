---
sidebar_position: 8
---
# snapshot.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/00basic/snapshot.tc`

### コンテンツ

```tc
#!/bin/sh
# description: Snapshot and tracing setting
# requires: snapshot
# flags: instance

echo "Set tracing off"
echo 0 > tracing_on

echo "Allocate and take a snapshot"
echo 1 > snapshot

# Since trace buffer is empty, snapshot is also empty, but allocated
grep -q "Snapshot is allocated" snapshot

echo "Ensure keep tracing off"
test `cat tracing_on` -eq 0

echo "Set tracing on"
echo 1 > tracing_on

echo "Take a snapshot again"
echo 1 > snapshot

echo "Ensure keep tracing on"
test `cat tracing_on` -eq 1

exit 0

```
