---
sidebar_position: 17
---
# cio_inject.h

### ファイル情報

- パス: `linux-v6.12/drivers/s390/cio/cio_inject.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 *    Copyright IBM Corp. 2021
 *    Author(s): Vineeth Vijayan <vneethv@linux.ibm.com>
 */

#ifndef CIO_CRW_INJECT_H
#define CIO_CRW_INJECT_H

#ifdef CONFIG_CIO_INJECT

#include <asm/crw.h>

DECLARE_STATIC_KEY_FALSE(cio_inject_enabled);
int stcrw_get_injected(struct crw *crw);

#endif
#endif

```
