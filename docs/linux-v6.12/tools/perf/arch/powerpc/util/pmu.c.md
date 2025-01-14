---
sidebar_position: 12
---
# pmu.c

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/powerpc/util/pmu.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <string.h>

#include "../../../util/pmu.h"
#include "mem-events.h"

void perf_pmu__arch_init(struct perf_pmu *pmu)
{
	if (pmu->is_core)
		pmu->mem_events = perf_mem_events_power;
}

```
