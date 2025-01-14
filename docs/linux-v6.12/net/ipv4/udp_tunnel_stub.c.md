---
sidebar_position: 104
---
# udp_tunnel_stub.c

### ファイル情報

- パス: `linux-v6.12/net/ipv4/udp_tunnel_stub.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
// Copyright (c) 2020 Facebook Inc.

#include <net/udp_tunnel.h>

const struct udp_tunnel_nic_ops *udp_tunnel_nic_ops;
EXPORT_SYMBOL_GPL(udp_tunnel_nic_ops);

```
