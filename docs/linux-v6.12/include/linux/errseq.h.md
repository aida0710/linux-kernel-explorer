---
sidebar_position: 334
---
# errseq.h

### ファイル情報

- パス: `linux-v6.12/include/linux/errseq.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * See Documentation/core-api/errseq.rst and lib/errseq.c
 */
#ifndef _LINUX_ERRSEQ_H
#define _LINUX_ERRSEQ_H

typedef u32	errseq_t;

errseq_t errseq_set(errseq_t *eseq, int err);
errseq_t errseq_sample(errseq_t *eseq);
int errseq_check(errseq_t *eseq, errseq_t since);
int errseq_check_and_advance(errseq_t *eseq, errseq_t *since);
#endif

```
