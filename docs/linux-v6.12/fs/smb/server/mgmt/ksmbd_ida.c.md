---
sidebar_position: 1
---
# ksmbd_ida.c

### ファイル情報

- パス: `linux-v6.12/fs/smb/server/mgmt/ksmbd_ida.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 *   Copyright (C) 2018 Samsung Electronics Co., Ltd.
 */

#include "ksmbd_ida.h"

int ksmbd_acquire_smb2_tid(struct ida *ida)
{
	return ida_alloc_range(ida, 1, 0xFFFFFFFE, GFP_KERNEL);
}

int ksmbd_acquire_smb2_uid(struct ida *ida)
{
	int id;

	id = ida_alloc_min(ida, 1, GFP_KERNEL);
	if (id == 0xFFFE)
		id = ida_alloc_min(ida, 1, GFP_KERNEL);

	return id;
}

int ksmbd_acquire_async_msg_id(struct ida *ida)
{
	return ida_alloc_min(ida, 1, GFP_KERNEL);
}

int ksmbd_acquire_id(struct ida *ida)
{
	return ida_alloc(ida, GFP_KERNEL);
}

void ksmbd_release_id(struct ida *ida, int id)
{
	ida_free(ida, id);
}

```
