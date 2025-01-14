---
sidebar_position: 1
---
# adc.h

### ファイル情報

- パス: `linux-v6.12/arch/sh/include/asm/adc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_ADC_H
#define __ASM_ADC_H
/*
 * Copyright (C) 2004  Andriy Skulysh
 */

#include <cpu/adc.h>

int adc_single(unsigned int channel);

#endif /* __ASM_ADC_H */

```
