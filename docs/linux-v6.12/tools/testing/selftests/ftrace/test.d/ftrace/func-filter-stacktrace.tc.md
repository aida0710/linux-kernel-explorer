---
sidebar_position: 9
---
# func-filter-stacktrace.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/ftrace/func-filter-stacktrace.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: ftrace - stacktrace filter command
# requires: set_ftrace_filter
# flags: instance

echo $FUNCTION_FORK:stacktrace >> set_ftrace_filter

grep -q "$FUNCTION_FORK:stacktrace:unlimited" set_ftrace_filter

(echo "forked"; sleep 1)

grep -q "<stack trace>" trace

```
