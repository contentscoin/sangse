# C06 original-byte recovery

Wrapper exit5 incorrectly reported no image. The exact newly created stdout file was /var/folders/tk/z_dr2xq57bd3f6pg3l46d4700000gn/T/imagen-grok-out.XXXXXX.VnvDvsJQrh. Its prose was directly joined to the absolute path, defeating the wrapper retrieval regex. It reported this session source, not a broad cached-image search:

/Users/chulrolee/.grok/sessions/%2Fprivate%2Fvar%2Ffolders%2Ftk%2Fz_dr2xq57bd3f6pg3l46d4700000gn%2FT%2Fimagen-grok.XXXXXX.a9seYjpUad/01a075b9-97f6-72d1-99ec-6a1b266925b9/images/1.jpg

The source was opened with Read before copying. It contains both exact original fictional quotations and correct attribution/statistics/notice. Copied original JPEG bytes to images/c06.jpg without reencoding or resizing.
Source and destination SHA256: 347c4e4b76db644d96450ec6d2d8283a03184a05fde1b1455032c4e85dc300ca
