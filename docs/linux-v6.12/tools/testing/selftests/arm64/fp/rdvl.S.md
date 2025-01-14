---
sidebar_position: 17
---
# rdvl.S

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/arm64/fp/rdvl.S`

### コンテンツ

```S
// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2021 ARM Limited.

#include "sme-inst.h"

.arch_extension sve

.globl rdvl_sve
rdvl_sve:
	hint	34			// BTI C
	rdvl	x0, #1
	ret

.globl rdvl_sme
rdvl_sme:
	hint	34			// BTI C

	rdsvl	0, 1

	ret

```
