---
sidebar_position: 1
---
# fail.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/samples/fail.tc`

### コンテンツ

```tc
#!/bin/sh
# description: failure-case example
cat non-exist-file
echo "this is not executed"

```
