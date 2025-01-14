---
sidebar_position: 14
---
# hid-usb_crash.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-usb_crash.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_usb_crash.py

bash ./run-hid-tools-tests.sh

```
