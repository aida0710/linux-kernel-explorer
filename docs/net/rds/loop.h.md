---
sidebar_position: 20
---
# loop.h

### ファイル情報

- パス: `net/rds/loop.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _RDS_LOOP_H
#define _RDS_LOOP_H

/* loop.c */
extern struct rds_transport rds_loop_transport;

int rds_loop_net_init(void);
void rds_loop_net_exit(void);
void rds_loop_exit(void);

#endif

```
