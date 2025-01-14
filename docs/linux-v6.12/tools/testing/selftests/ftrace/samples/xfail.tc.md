---
sidebar_position: 6
---
# xfail.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/samples/xfail.tc`

### コンテンツ

```tc
#!/bin/sh
# description: xfail-case example
cat non-exist-file || exit_xfail

```
