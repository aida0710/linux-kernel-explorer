---
sidebar_position: 11
---
# hid-multitouch.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-multitouch.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_multitouch.py

bash ./run-hid-tools-tests.sh

```
