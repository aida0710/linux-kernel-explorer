---
sidebar_position: 7
---
# unroll_loop_thread_10.sh

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/shell/coresight/unroll_loop_thread_10.sh`

### コンテンツ

```sh
#!/bin/sh -e
# CoreSight / Unroll Loop Thread 10

# SPDX-License-Identifier: GPL-2.0
# Carsten Haitzler <carsten.haitzler@arm.com>, 2021

TEST="unroll_loop_thread"

# shellcheck source=../lib/coresight.sh
. "$(dirname $0)"/../lib/coresight.sh

ARGS="10"
DATV="10"
# shellcheck disable=SC2153
DATA="$DATD/perf-$TEST-$DATV.data"

perf record $PERFRECOPT -o "$DATA" "$BIN" $ARGS

perf_dump_aux_verify "$DATA" 10 10 10

err=$?
exit $err

```
