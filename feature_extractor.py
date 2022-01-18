from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.efficientnet import EfficientNetB1, preprocess_input
from tensorflow.keras.models import Model
from tensorflow.keras.models import load_model
import numpy as np


class FeatureExtractor:
    def __init__(self):
        base_model = load_model("model.h5")
        self.model = Model(inputs=base_model.input, outputs=base_model.output)

    def extract(self, img):
        img = img.resize((224, 224)).convert("RGB")  # EfficientNetB1 must take a 224x224 img as an input # Make sure img is color
        x = image.img_to_array(img)  # To np.array. Height x Width x Channel. dtype=float32
        x = np.expand_dims(x, axis=0)  # (H, W, C)->(1, H, W, C), where the first elem is the number of img
        x = preprocess_input(x)  # Subtracting avg values for each pixel
        feature = self.model.predict(x)[0]  # (1, 4096) -> (4096, )
        return feature / np.linalg.norm(feature)  # Normalize