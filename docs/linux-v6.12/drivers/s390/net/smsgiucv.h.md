---
sidebar_position: 32
---
# smsgiucv.h

### ファイル情報

- パス: `linux-v6.12/drivers/s390/net/smsgiucv.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * IUCV special message driver
 *
 * Copyright IBM Corp. 2003
 * Author(s): Martin Schwidefsky (schwidefsky@de.ibm.com)
 */

#define SMSGIUCV_DRV_NAME     "SMSGIUCV"

int  smsg_register_callback(const char *,
			    void (*)(const char *, char *));
void smsg_unregister_callback(const char *,
			      void (*)(const char *, char *));


```
