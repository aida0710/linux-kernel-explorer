---
sidebar_position: 64
---
# virtio_gpu-none-skips.txt

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/xfails/virtio_gpu-none-skips.txt`

### コンテンツ

```txt
# Hits a "refcount_t: underflow; use-after-free" in virtio_gpu_fence_event_process
# When run in a particular order with other tests
kms_cursor_legacy.*

# Job just hangs without any output
kms_flip@flip-vs-suspend.*

# Skip driver specific tests
^amdgpu.*
^msm.*
nouveau_.*
^panfrost.*
^v3d.*
^vc4.*
^vmwgfx*

# Skip intel specific tests
gem_.*
i915_.*
xe_.*
tools_test.*

# Currently fails and causes coverage loss for other tests
# since core_getversion also fails.
core_hotunplug.*

```
