---
sidebar_position: 5
---
# ethernet-mem.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/octeon/ethernet-mem.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * This file is based on code from OCTEON SDK by Cavium Networks.
 *
 * Copyright (c) 2003-2007 Cavium Networks
 */

int cvm_oct_mem_fill_fpa(int pool, int size, int elements);
void cvm_oct_mem_empty_fpa(int pool, int size, int elements);

```
