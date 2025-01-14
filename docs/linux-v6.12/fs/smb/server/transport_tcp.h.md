---
sidebar_position: 41
---
# transport_tcp.h

### ファイル情報

- パス: `linux-v6.12/fs/smb/server/transport_tcp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 *   Copyright (C) 2018 Samsung Electronics Co., Ltd.
 */

#ifndef __KSMBD_TRANSPORT_TCP_H__
#define __KSMBD_TRANSPORT_TCP_H__

int ksmbd_tcp_set_interfaces(char *ifc_list, int ifc_list_sz);
int ksmbd_tcp_init(void);
void ksmbd_tcp_destroy(void);

#endif /* __KSMBD_TRANSPORT_TCP_H__ */

```
