---
sidebar_position: 16
---
# vsock_test_zerocopy.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/vsock/vsock_test_zerocopy.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
#ifndef VSOCK_TEST_ZEROCOPY_H
#define VSOCK_TEST_ZEROCOPY_H
#include "util.h"

void test_stream_msgzcopy_client(const struct test_opts *opts);
void test_stream_msgzcopy_server(const struct test_opts *opts);

void test_seqpacket_msgzcopy_client(const struct test_opts *opts);
void test_seqpacket_msgzcopy_server(const struct test_opts *opts);

void test_stream_msgzcopy_empty_errq_client(const struct test_opts *opts);
void test_stream_msgzcopy_empty_errq_server(const struct test_opts *opts);

#endif /* VSOCK_TEST_ZEROCOPY_H */

```
