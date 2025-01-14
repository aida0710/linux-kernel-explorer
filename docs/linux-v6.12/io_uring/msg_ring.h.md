---
sidebar_position: 28
---
# msg_ring.h

### ファイル情報

- パス: `linux-v6.12/io_uring/msg_ring.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0

int io_msg_ring_prep(struct io_kiocb *req, const struct io_uring_sqe *sqe);
int io_msg_ring(struct io_kiocb *req, unsigned int issue_flags);
void io_msg_ring_cleanup(struct io_kiocb *req);
void io_msg_cache_free(const void *entry);

```
