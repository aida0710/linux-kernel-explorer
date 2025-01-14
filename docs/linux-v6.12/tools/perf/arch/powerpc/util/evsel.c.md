---
sidebar_position: 6
---
# evsel.c

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/powerpc/util/evsel.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <stdio.h>
#include "util/evsel.h"

void arch_evsel__set_sample_weight(struct evsel *evsel)
{
	evsel__set_sample_bit(evsel, WEIGHT_STRUCT);
}

```
