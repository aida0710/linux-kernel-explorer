---
sidebar_position: 6
---
# probe.sh

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/shell/lib/probe.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0
# Arnaldo Carvalho de Melo <acme@kernel.org>, 2017

skip_if_no_perf_probe() {
	perf probe 2>&1 | grep -q 'is not a perf-command' && return 2
	return 0
}

skip_if_no_perf_trace() {
	perf trace -h 2>&1 | grep -q -e 'is not a perf-command' -e 'trace command not available' && return 2
	return 0
}

```
