---
sidebar_position: 19
---
# tracing-error-log.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/ftrace/tracing-error-log.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: ftrace - test tracing error log support
# event tracing is currently the only ftrace tracer that uses the
# tracing error_log, hence this check
# requires: set_event error_log

fail() { #msg
    echo $1
    exit_fail
}

ftrace_errlog_check 'event filter parse error' '((sig >= 10 && sig < 15) || dsig ^== 17) && comm != bash' 'events/signal/signal_generate/filter'

exit 0

```
